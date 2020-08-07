import generate from "@babel/generator";

export default class Transitions {
    _transitions = [];

    _getProgramParent = (path) => {
        let parent = path;
        do {
            if (parent.isProgram()) return parent;
        } while ((parent = parent.parentPath));
    };

    getValue = () => {
        return this._transitions;
    };

    addExitTransition = (code) => {
        this._transitions.push({
            code,
            pluginAlias: "output",
            visitorType: "exit",
            size: new Blob([code], { type: "text/plain" }).size,
        });
    };

    wrapPluginVisitorMethod = (
        pluginAlias,
        visitorType,
        callback
    ) => {
        return (...args) => {
            const { code } = generate(this._getProgramParent(args[0]).node);

            if (
                this._transitions.length === 0 ||
                this._transitions[this._transitions.length - 1].code !== code
            ) {
                this._transitions.push({
                    code,
                    pluginAlias,
                    visitorType,
                    currentNode: args[0].node.type,
                    size: new Blob([code], { type: "text/plain" }).size,
                });
            }
            callback.call(this, ...args);
        };
    };
}