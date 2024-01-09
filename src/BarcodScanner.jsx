import { useState } from "react";
import { useZxing } from "react-zxing";

export const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <span>Barcode number:</span>
        <span style={{fontSize: '48px'}}>{result}</span>
      </p>
    </>
  );
};