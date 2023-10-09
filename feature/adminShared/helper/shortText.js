export const shortText = (num, title) => {
    return title.length >= num ? title.slice(0, num) + "..." : title;
  };