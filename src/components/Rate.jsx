import Rating from "@material-ui/lab/Rating";

function Rate({ rating }) {
  const resutl = rating && rating.map((el) => el).length;
  let sum = 0;
  rating && rating.map(myFunction);

  function myFunction(obj) {
    sum += obj["rate"] / resutl;
  }

  return (
    <div className="w-full flex justify-center">
      <Rating name="read-only" value={sum} readOnly />
      <p className="text-sm text-secondary">{`(${resutl} صوتاً )`}</p>
    </div>
  );
}

export default Rate;
