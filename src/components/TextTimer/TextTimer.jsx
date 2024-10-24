const numberNames = [
  "ZERO",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "ELEVEN",
  "TWELVE",
  "THIRTEEN",
  "FOURTEEN",
  "FIFTEEN",
  "SIXTEEN",
  "SEVENTEEN",
  "EIGHTEEN",
  "NINETEEN",
  "TWENTY",
  "TWENTY-ONE",
  "TWENTY-TWO",
  "TWENTY-THREE",
  "TWENTY-FOUR",
  "TWENTY-FIVE",
  "TWENTY-SIX",
  "TWENTY-SEVEN",
  "TWENTY-EIGHT",
  "TWENTY-NINE",
  "THIRTY",
  "THIRTY-ONE",
  "THIRTY-TWO",
  "THIRTY-THREE",
  "THIRTY-FOUR",
  "THIRTY-FIVE",
  "THIRTY-SIX",
  "THIRTY-SEVEN",
  "THIRTY-EIGHT",
  "THIRTY-NINE",
  "FORTY",
  "FORTY-ONE",
  "FORTY-TWO",
  "FORTY-THREE",
  "FORTY-FOUR",
  "FORTY-FIVE",
  "FORTY-SIX",
  "FORTY-SEVEN",
  "FORTY-EIGHT",
  "FORTY-NINE",
  "FIFTY",
  "FIFTY-ONE",
  "FIFTY-TWO",
  "FIFTY-THREE",
  "FIFTY-FOUR",
  "FIFTY-FIVE",
  "FIFTY-SIX",
  "FIFTY-SEVEN",
  "FIFTY-EIGHT",
  "FIFTY-NINE",
  "SIXTY",
];

function currentTimeToNumber(currentTime) {
  const currentNumber = currentTime.split(":").map(Number);
  return currentNumber;
}

export default function TextTimer({ currentTime }) {
  let number = currentTimeToNumber(currentTime);
  const currentMin = number[0];
  const currentSec = number[1];

  return (
    <section className="w-screen h-64 flex flex-col items-center justify-center">
      <div className="flex flex-col items-start">
        <p className="text-2xl font-semibold">{`${numberNames[currentMin]} MINUTES AND`}</p>
        <p className="text-1xl font-semibold">{`${numberNames[currentSec]} SECONDS`}</p>
      </div>
    </section>
  );
}
