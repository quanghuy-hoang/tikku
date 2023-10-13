import { useQRCode } from 'next-qrcode';
import crc16ccitt from "crc/crc16ccitt";

type QrContent = {
  id: string;
  value: string;
};

const STATIC_QR_ID = "11";
const DYNAMIC_QR_ID = "12";

const TECHCOMBANK_BIN = "970407";
const VND_CURRENCY_CODE = "704";
const COUNTRY_CODE = "VN";

// QR Inter-Bank Funds Transfer To Account/Card
const ACCOUNT_TRANSFER = "QRIBFTTA";
const CARD_TRANSFER = "QRIBFTTC";

export default function QrSvgGenerator({ totalOrder }: { totalOrder: number }) {
  const { SVG } = useQRCode();

  return (
    <div className="border-4 border-slate-900 rounded-xl overflow-hidden">
      <SVG
        text={qrTextBuilder('19034165746018', totalOrder.toString(), 'MOCK_TRANSACTION_ID')}
      />
    </div>
  )
}

function qrTextBuilder(bankNumber: string, amount: string, message: string) {
  const payloadFormatIndicator: QrContent = {
    id: "00",
    value: "01",
  };

  const pointOfInitiationMethod: QrContent = {
    id: "01",
    value: DYNAMIC_QR_ID,
  };

  const GUID: QrContent = {
    id: "00",
    value: "A000000727", // fixed
  };

  const acquirerId: QrContent = {
    id: "00",
    value: TECHCOMBANK_BIN,
  };

  const consumerId: QrContent = {
    id: "01",
    value: bankNumber,
  };

  const beneficiaryOrganization: QrContent = {
    id: "01",
    value: combineQrContent([acquirerId, consumerId]),
  };

  const serviceCode: QrContent = {
    id: "02",
    value: ACCOUNT_TRANSFER,
  };

  const consumerAccountInformation: QrContent = {
    id: "38",
    value: combineQrContent([GUID, beneficiaryOrganization, serviceCode]),
  };

  const transactionCurrency: QrContent = {
    id: "53",
    value: VND_CURRENCY_CODE,
  };

  const transactionAmount: QrContent = {
    id: "54",
    value: amount,
  };

  const countryCode: QrContent = {
    id: "58",
    value: COUNTRY_CODE,
  };

  const purposeOfTransaction: QrContent = {
    id: "08",
    value: message,
  };

  const additionalDataFieldTemplate: QrContent = {
    id: "62",
    value: combineQrContent([purposeOfTransaction]),
  };

  const qrContents = combineQrContent([
    payloadFormatIndicator,
    pointOfInitiationMethod,
    consumerAccountInformation,
    transactionCurrency,
    transactionAmount,
    countryCode,
    additionalDataFieldTemplate,
  ]);

  const crc: QrContent = {
    id: "63",
    value: crc16ccitt(qrContents).toString(16).toUpperCase(),
  };

  return qrContents + genQrContentString(crc);
}

function genQrContentString(content: QrContent) {
  const valueLength = content.value.length;
  const length = valueLength < 10 ? `0${valueLength}` : valueLength;
  return content.id + length.toString() + content.value;
}

function combineQrContent(contents: QrContent[]) {
  let finalValue = "";
  contents.forEach((content) => {
    finalValue += genQrContentString(content);
  });
  return finalValue;
}
