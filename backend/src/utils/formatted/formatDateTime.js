const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  const optionsDate = { year: "numeric", month: "2-digit", day: "2-digit" };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDate = date.toLocaleDateString(undefined, optionsDate);
  const formattedTime = date.toLocaleTimeString(undefined, optionsTime);

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

module.exports = formatDateTime;
