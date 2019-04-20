export const generateRandomSessionTokenForGoogle = () => {
  let currentDate = new Date();
  let currentTimeStamp = currentDate.getTime().toString();
  return currentTimeStamp.substring(currentTimeStamp.length, 3);
}
