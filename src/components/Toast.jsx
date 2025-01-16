import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export const Toast = ({ open, onClose, type, message, action }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Alert
        open={open}
        onClose={onClose}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className={`${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
        icon={
          type === "success" ? (
            <CheckCircleIcon className="h-6 w-6" />
          ) : (
            <XCircleIcon className="h-6 w-6" />
          )
        }
        action={
          action && (
            <Button
              variant="text"
              color="white"
              size="sm"
              className="!absolute top-3 right-3"
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        }
      >
        {message}
      </Alert>
    </div>
  );
};

// Custom hook for toast
export const useToast = () => {
  const [showToast, setShowToast] = React.useState(false);
  const [toastData, setToastData] = React.useState({
    type: "success",
    message: "",
    action: null,
  });

  const toast = ({ type, message, action }) => {
    setToastData({ type, message, action });
    setShowToast(true);

    // Auto hide after 3 seconds if no action
    if (!action) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return {
    Toast: (
      <Toast
        open={showToast}
        onClose={() => setShowToast(false)}
        {...toastData}
      />
    ),
    toast,
  };
};

export default Toast;
