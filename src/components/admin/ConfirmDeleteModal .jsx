import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

export default function ConfirmDeleteModal({ open, onClose, onConfirm, loading, product }) {
  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Delete Product</DialogHeader>
      <DialogBody>
        Are you sure you want to delete <span className="font-bold">{product?.name}</span>?<br />
        This action cannot be undone.
      </DialogBody>
      <DialogFooter>
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>
        <Button color="red" onClick={onConfirm} className="ml-2" disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}