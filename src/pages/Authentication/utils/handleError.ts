export const handleError = (error: string) => {
    switch (error) {
      case "User not found":
        return "The email address is not registered.";
      case "Incorrect password":
        return "The password you entered is incorrect.";
      default:
        return "An error occurred. Please try again.";
    }
  };
  