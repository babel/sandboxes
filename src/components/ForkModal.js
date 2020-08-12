import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

export function ForkModal({ trigger, onFork }) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      size="mini"
      trigger={trigger}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Fork Config</Modal.Header>
      <Modal.Content>
        <p>Would you like to fork the current config?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          No
        </Button>
        <Button
          positive
          onClick={() => {
            onFork();
            setOpen(false);
          }}
        >
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
