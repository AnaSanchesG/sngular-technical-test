export const validateForm = (value) => {
  const transformValue = parseFloat(value);

  let status = {
    isError: false,
    typeError: " ",
  };

  if (transformValue === 0) {
    return (status = {
      isError: false,
      typeError: " ",
    });
  }

  if(!Number.isInteger(transformValue)){
    return (status = {
      isError: true,
      typeError: "Solo se admiten números enteros",
    });
  }

  if (!transformValue) {
    return (status = {
      isError: true,
      typeError: "Solo se admiten números naturales",
    });
  }

  if (typeof transformValue !== "number") {
    return (status = {
      isError: true,
      typeError: "Solo se admiten números",
    });
  }

  if (transformValue < 0) {
    return (status = {
      isError: true,
      typeError: "La serie solo trabaja con números positivos",
    });
  }

  return status;
};
