import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";

export function ShareModal({ trigger, shareLink }) {
  // State to track open vs closed
  const [open, setOpen] = useState(false);
  // React ref to the input object
  let textArea;
  return (
    <Modal
      size="mini"
      trigger={trigger}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Share Link</Modal.Header>
      <Modal.Content>
        <Input
          ref={input => {
            textArea = input;
          }}
          action={{
            color: "teal",
            labelPosition: "right",
            icon: "copy",
            content: "Copy",
            onClick: () => {
              textArea.select();
              document.execCommand("copy");
            },
          }}
          defaultValue={shareLink}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
