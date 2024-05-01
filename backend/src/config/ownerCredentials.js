require("dotenv").config();

const OWNER_EMAIL = process.env.OWNER_EMAIL;
const OWNER_NAME = process.env.OWNER_NAME;
const OWNER_COUNTRY = process.env.OWNER_COUNTRY;
const OWNER_STATE = process.env.OWNER_STATE;
const OWNER_CITY = process.env.OWNER_CITY;
const OWNER_STREET_ADRESS = process.env.OWNER_STREET_ADRESS;
const OWNER_STREET_NUMBER = process.env.OWNER_STREET_NUMBER;
const OWNER_ZIP_CODE = process.env.OWNER_ZIP_CODE;
const OWNER_PHONE = process.env.OWNER_PHONE;

module.exports = {
  OWNER_EMAIL,
  OWNER_NAME,
  OWNER_COUNTRY,
  OWNER_STATE,
  OWNER_CITY,
  OWNER_STREET_ADRESS,
  OWNER_STREET_NUMBER,
  OWNER_ZIP_CODE,
  OWNER_PHONE
};
