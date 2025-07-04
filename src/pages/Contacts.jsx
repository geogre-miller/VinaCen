import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WorkWithUs from "@/components/WorkWithUs";

import clock from "@/assets/icons/clock.svg";
import phone from "@/assets/icons/phone.svg";
import mail from "@/assets/icons/mail.svg";
import office from "@/assets/icons/office.svg";

import React, { useState } from "react";
import { Alert, Button } from "@material-tailwind/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useToast } from "@/components/Toast";

const Contacts = () => {
  const { Toast, toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Liên hệ tư vấn",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Địa chỉ email không hợp lệ";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập lời nhắn";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        type: "error",
        message: "Vui lòng điền đầy đủ thông tin!",
      });
      return;
    }

    // Form submission logic here
    toast({
      type: "success",
      message: "Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ liên hệ lại sớm!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "Liên hệ tư vấn",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen px-4 md:px-[15px] pb-24">
        <div className="w-full md:px-8 ">
          <h1 className="text-3xl md:text-5xl font-bold font-roboto text-center py-12 md:py-[84px] animate-fade-up">
            Liên hệ
          </h1>
        </div>
        <div className="p-[2px] shadow-md w-full h-[300px] md:h-[480px] rounded-lg border-2 border-green-800 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="loader"></div> {/* Updated loader */}
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.44838490837!2d108.16708577471553!3d16.04220558463339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219f8dc70c613%3A0xe125047d2fcc7dce!2sC%C3%B4ng%20ty%20TNHH%20SX%20TMDV%20Vinacen!5e0!3m2!1sen!2s!4v1733756935517!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start w-full h-auto p-4 md:p-8 lg:px-48 mt-[30px] gap-8 lg:gap-[75px]">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 p-[10px] mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold font-roboto mb-4">
              Liên hệ
            </h2>
            <p className="text-sm font-roboto">
              Bạn đang tìm kiếm một giải pháp trang trí nội thất độc đáo và hiện
              đại? Tấm trần 3D của chúng tôi sẽ là lựa chọn hoàn hảo.
            </p>
            <div className="pt-[40px] pb-[20px] grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Office Section */}
              <div className="flex items-start">
                <div className="mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="24"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <path
                      d="M4.39296 1.82143V21.8571H15.3215V1.82143H4.39296ZM3.48225 0H16.2322C16.4738 0 16.7054 0.0959499 16.8762 0.266742C17.047 0.437534 17.143 0.669178 17.143 0.910714V22.7679C17.143 23.0094 17.047 23.241 16.8762 23.4118C16.7054 23.5826 16.4738 23.6786 16.2322 23.6786H3.48225C3.24071 23.6786 3.00907 23.5826 2.83828 23.4118C2.66748 23.241 2.57153 23.0094 2.57153 22.7679V0.910714C2.57153 0.669178 2.66748 0.437534 2.83828 0.266742C3.00907 0.0959499 3.24071 0 3.48225 0Z"
                      fill="#D2A23A"
                    ></path>
                    <path
                      d="M6.21429 5.46436H13.5V7.28578H6.21429V5.46436ZM6.21429 10.9286H13.5V12.7501H6.21429V10.9286ZM6.21429 16.3929H13.5V18.2144H6.21429V16.3929ZM17.1429 12.7501H20.7857V14.5715H17.1429V12.7501ZM17.1429 16.3929H20.7857V18.2144H17.1429V16.3929ZM0.75 21.8572H26.25V23.6786H0.75V21.8572Z"
                      fill="#D2A23A"
                    ></path>
                    <path
                      d="M17.143 9.10707V21.8571H22.6072V9.10707H17.143ZM16.2322 7.28564H23.518C23.7595 7.28564 23.9911 7.38159 24.1619 7.55239C24.3327 7.72318 24.4287 7.95482 24.4287 8.19636V22.7678C24.4287 23.0093 24.3327 23.241 24.1619 23.4118C23.9911 23.5826 23.7595 23.6785 23.518 23.6785H16.2322C15.9907 23.6785 15.7591 23.5826 15.5883 23.4118C15.4175 23.241 15.3215 23.0093 15.3215 22.7678V8.19636C15.3215 7.95482 15.4175 7.72318 15.5883 7.55239C15.7591 7.38159 15.9907 7.28564 16.2322 7.28564Z"
                      fill="#D2A23A"
                    ></path>
                  </svg>
                </div>
                <div className=" font-roboto">
                  <h3 className="font-bold font-nunito mb-[15px]">Office</h3>
                  <p className="mb-[20px] text-sm">
                    04 Nhon Hoa 22, Cam Le District, <br /> Da Nang City, Viet
                    Nam
                  </p>
                </div>
              </div>
              {/* Open Hours Section */}
              <div className="flex items-start">
                <div className="mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.9257 20.634C18.243 20.3167 18.7574 20.3167 19.0747 20.634L20.6997 22.259C21.017 22.5763 21.017 23.0907 20.6997 23.408C20.3824 23.7253 19.868 23.7253 19.5507 23.408L17.9257 21.783C17.6084 21.4657 17.6084 20.9513 17.9257 20.634Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.07476 20.634C5.75747 20.3167 5.24301 20.3167 4.92572 20.634L3.30072 22.259C2.98342 22.5763 2.98342 23.0907 3.30072 23.408C3.61801 23.7253 4.13247 23.7253 4.44977 23.408L6.07476 21.783C6.39206 21.4657 6.39206 20.9513 6.07476 20.634Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0002 4.146C7.06697 4.146 3.06274 8.15022 3.06274 13.0835C3.06274 18.0168 7.06697 22.021 12.0002 22.021C16.9335 22.021 20.9377 18.0168 20.9377 13.0835C20.9377 8.15022 16.9335 4.146 12.0002 4.146ZM1.43774 13.0835C1.43774 7.25277 6.16952 2.521 12.0002 2.521C17.831 2.521 22.5627 7.25277 22.5627 13.0835C22.5627 18.9142 17.831 23.646 12.0002 23.646C6.16952 23.646 1.43774 18.9142 1.43774 13.0835Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6394 7.89307C12.0881 7.89307 12.4519 8.25684 12.4519 8.70557V12.7031C12.4519 12.8353 12.5035 13.0385 12.6255 13.2524C12.7475 13.4664 12.8961 13.6141 13.0091 13.6811L13.0112 13.6823L16.0337 15.4861C16.4191 15.7161 16.5451 16.2148 16.3151 16.6002C16.0852 16.9855 15.5863 17.1115 15.201 16.8815L12.1806 15.0791L12.1796 15.0784C11.7666 14.8334 11.4378 14.45 11.2139 14.0574C10.9898 13.6644 10.8269 13.1851 10.8269 12.7031V8.70557C10.8269 8.25684 11.1907 7.89307 11.6394 7.89307Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.8912 0.62878C18.1882 0.292503 18.7017 0.260761 19.038 0.557876L23.0971 4.1444C23.4335 4.44152 23.4652 4.95499 23.1681 5.29127C22.8709 5.62754 22.3575 5.65928 22.0213 5.36217L17.962 1.77564C17.6257 1.47853 17.594 0.965058 17.8912 0.62878Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.10901 0.62878C5.81189 0.292503 5.29842 0.260761 4.96215 0.557876L0.90295 4.1444C0.566673 4.44152 0.534931 4.95499 0.832046 5.29127C1.12916 5.62754 1.64263 5.65928 1.97891 5.36217L6.03811 1.77564C6.37439 1.47853 6.40613 0.965058 6.10901 0.62878Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                      strokeWidth="0.4"
                    ></path>
                  </svg>
                </div>
                <div className="font-roboto">
                  <h3 className="font-nunito font-bold mb-[15px]">
                    Giờ mở cửa
                  </h3>
                  <p className="mb-[20px] text-sm">
                    Thứ 2 - Thứ 6: <br />
                    8h sáng - 5h chiều
                  </p>
                </div>
              </div>
            </div>
            <div className="my-[10px] grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Call Us Section */}
              <div className="flex items-start">
                <div className="mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22.8034 18.8598C22.8034 19.2499 22.7167 19.6507 22.5325 20.0408C22.3483 20.4308 22.11 20.7992 21.7958 21.1459C21.2649 21.731 20.6798 22.1536 20.0189 22.4244C19.3688 22.6953 18.6645 22.8361 17.9061 22.8361C16.801 22.8361 15.62 22.5761 14.374 22.0452C13.128 21.5143 11.882 20.7992 10.6469 19.8999C9.40087 18.9898 8.21989 17.9822 7.09308 16.8662C5.97711 15.7394 4.96948 14.5584 4.0702 13.3233C3.18176 12.0881 2.46667 10.853 1.9466 9.62864C1.42654 8.39349 1.1665 7.21251 1.1665 6.0857C1.1665 5.34894 1.29652 4.64468 1.55655 3.9946C1.81659 3.33369 2.2283 2.72694 2.80254 2.18521C3.49596 1.50262 4.25439 1.16675 5.05616 1.16675C5.35953 1.16675 5.6629 1.23176 5.93377 1.36177C6.21547 1.49179 6.46467 1.68681 6.6597 1.96852L9.17334 5.51146C9.36837 5.78233 9.50922 6.03153 9.60673 6.26989C9.70424 6.49742 9.75842 6.72495 9.75842 6.93081C9.75842 7.19084 9.68258 7.45087 9.53089 7.70007C9.39004 7.94927 9.18418 8.2093 8.92415 8.46933L8.10071 9.32527C7.98153 9.44445 7.92735 9.58531 7.92735 9.75866C7.92735 9.84534 7.93819 9.92118 7.95986 10.0079C7.99236 10.0945 8.02487 10.1595 8.04654 10.2246C8.24156 10.5821 8.57744 11.048 9.05416 11.6114C9.54172 12.1748 10.0618 12.749 10.6252 13.3233C11.2103 13.8975 11.7737 14.4284 12.3479 14.916C12.9113 15.3927 13.3772 15.7177 13.7456 15.9128C13.7998 15.9344 13.8648 15.9669 13.9406 15.9994C14.0273 16.0319 14.114 16.0428 14.2115 16.0428C14.3957 16.0428 14.5365 15.9778 14.6557 15.8586L15.4791 15.046C15.75 14.7751 16.01 14.5693 16.2592 14.4392C16.5084 14.2876 16.7576 14.2117 17.0285 14.2117C17.2344 14.2117 17.4511 14.2551 17.6894 14.3526C17.9278 14.4501 18.177 14.5909 18.4478 14.7751L22.0341 17.3213C22.3158 17.5163 22.5109 17.7438 22.63 18.0147C22.7384 18.2856 22.8034 18.5564 22.8034 18.8598Z"
                      stroke="#D2A23A"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M19.0446 8.75113C19.0446 8.10105 18.5354 7.10425 17.7769 6.29165C17.0835 5.54406 16.1626 4.95898 15.2524 4.95898"
                      stroke="#D2A23A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.8367 8.75103C22.8367 4.55801 19.4455 1.16675 15.2524 1.16675"
                      stroke="#D2A23A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h3 className="font-bold pb-[15px] font-nunito">
                    Gọi cho chúng tôi
                  </h3>
                  <p className="font-roboto text-sm">
                    Liên hệ ngay <br />
                    (+84) 0906 540 038
                  </p>
                </div>
              </div>
              {/* Email Us Section */}
              <div className="flex items-start">
                <div className="etheme-icon-box-icon etheme-icon-box-icon-type-icon mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M23.6619 9.25734L13.8777 1.47405C13.5099 1.10618 13.0205 0.902832 12.4999 0.902832C11.9793 0.902832 11.4899 1.10533 11.1221 1.47405L1.25439 9.34002V24.0981H23.7454V9.34171L23.6619 9.25734ZM2.69552 9.17128L11.7582 2.1094C12.1548 1.71283 12.8458 1.71283 13.2424 2.1094L22.7312 9.59906L16.2647 16.0656L13.8777 13.6786C13.5099 13.3107 13.0205 13.1074 12.4999 13.1074C11.9793 13.1074 11.4899 13.3107 11.1221 13.6786L8.69965 16.1002L2.23314 9.63365L2.69552 9.17128ZM8.06346 16.7355L7.9968 16.803L7.99596 16.8022L2.15468 22.6434V10.8267L8.06346 16.7355ZM2.87186 23.1978L3.35533 22.7143H3.35702L11.7582 14.3139C12.1548 13.9174 12.8458 13.9174 13.2424 14.3139L22.1279 23.1978H2.87186ZM22.846 11.1372V22.6443L16.9009 16.7017L22.846 10.7567V11.1372Z"
                      fill="#D2A23A"
                      stroke="#D2A23A"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h3 className="font-bold mb-[15px] font-nunito">
                    Liên hệ qua Email
                  </h3>
                  <p className="font-roboto text-sm">
                    Cần trợ giúp? <br />
                    contact@vinacen.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-nunito font-bold mb-1">
                  Họ và tên:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn"
                  className={`w-full border p-2 rounded ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block font-nunito font-bold mb-1">
                  Địa chỉ Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ Email của bạn"
                  className={`w-full border p-3 rounded text-sm md:text-base ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block font-nunito font-bold mb-1">
                  Dịch vụ:
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border p-3 rounded text-sm md:text-base"
                >
                  <option>Liên hệ tư vấn</option>
                  <option>Mở đại lý</option>
                  <option>Structure Design</option>
                </select>
              </div>

              <div>
                <label className="block font-nunito font-bold mb-1">
                  Nhập lời nhắn:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập câu hỏi của bạn dành cho chúng tôi..."
                  className={`w-full border p-3 rounded h-32 font-roboto text-sm md:text-base ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded w-full md:w-auto min-w-[120px] font-roboto hover:bg-gray-800 transition-colors"
              >
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </div>
      <WorkWithUs />
      <Footer />
      {/* Add the toast notification */}
      {Toast}
    </>
  );
};

export default Contacts;
