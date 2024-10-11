export const useNotification = () => {
  const toast = useToast();

  const showNotification = (information: {
    title?: string;
    message?: string;
    type: "success" | "error" | "warning" | "info";
  }) => {
    const info = reactive(information);
    switch (info.type) {
      case "success":
        info.title = info.title || "Success";
        info.message = info.message || "Successful operation";
        toast.add({
          title: info.title,
          description: info.message,
          icon: "i-heroicons-check-badge",
        });
        break;
      case "error":
        info.title = info.title || "Error";
        info.message = info.message || "There was an error";
        toast.add({
          title: info.title,
          description: info.message,
          icon: "i-heroicons-x-circle",
          color: "red",
        });
        break;
      case "info":
        info.title = info.title || "Information";
        toast.add({
          title: info.title,
          description: info.message,
          icon: "i-heroicons-information-circle",
          color: "cyan",
        });
    }
  };

  return { showNotification };
};
