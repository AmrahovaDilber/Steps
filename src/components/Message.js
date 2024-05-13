const message = ["Learn React", "Apply for Jobs", "Invest your new income"];

export default function Message({ step }) {
  return (
    <div className="text-center mt-24">
      <p className="text-2xl font-semibold ">
        Step{step}: {message[step - 1]}
      </p>
    </div>
  );
}
