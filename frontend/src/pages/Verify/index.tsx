import { FormEvent, KeyboardEvent, useRef, useState } from "react";

const VerifyPage = () => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to the next input if the value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move to the previous input if backspace is pressed and current box is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Entered code: ${code.join("")}`);
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-[#15192B] p-8 md:p-12 md:min-w-[450px] rounded-lg shadow-lg w-[360px] text-white">
        <h2 className="text-xl font-semibold mb-2 font-sora">
          Verify your Account
        </h2>
        <p className="mb-6 font-medium">
          Please enter the 4 digit code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-4 my-4 md:my-8">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center bg-[#0F121E] border border-gray-600 rounded-lg text-white text-xl focus:outline-none focus:ring-2 focus:ring-thrGreen"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-thrGreen rounded-lg text-black font-semibold hover:bg-[#2BB98F] transition"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
