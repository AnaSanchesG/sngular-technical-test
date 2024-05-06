export const validateForm = (value) => {
  const transformValue = parseFloat(value);

  console.log(`Número prueba: ${value}`);

  let status = {
    isError: false,
    typeError: " ",
  };

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

  if (transformValue <= 0) {
    return (status = {
      isError: true,
      typeError: "La serie solo trabaja con números positivos",
    });
  }

  return status;
};
