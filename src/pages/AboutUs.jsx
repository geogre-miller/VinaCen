import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Stepper, Step } from "@material-tailwind/react";
import {
  LightBulbIcon,
  Square3Stack3DIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import React from "react";
import aboutUs1Image from "@/assets/images/aboutUs1.jpg";
import WorkWithUs from "@/components/WorkWithUs";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";

const AboutUs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>
      <div className="w-full min-h-screen px-[15px]">
        <div className="w-full min-h-screen md:px-8 ">
          {/* Hero Section */}
          <h1 className="text-5xl font-bold font-roboto text-center pt-[24px] py-[84px] animate-fade-up">
            Về chúng tôi
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[99px]">
            <Card className="lg:col-span-2 w-full flex-row bg-gradient-to-br from-emerald-100 via-green-800 via-100% to-green-900 animate-fade-right animate-ease-in-out animate-fill-both ">
              <CardHeader
                shadow={false}
                floated={false}
                className="w-2/5 shrink-0 m-0 rounded-r-none"
              >
                <img
                  src={aboutUs1Image}
                  alt="card-image"
                  className="h-full w-full object-cover bg-right"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase font-nunito font-bold"
                >
                  Vinacen
                </Typography>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-nunito font-bold"
                >
                  Kiến Tạo Không Gian, Khẳng Định Phong Cách
                </Typography>
                <Typography
                  color="gray"
                  className="mb-8 font-normal text-justify"
                >
                  Tại Vinacen, chúng tôi mang trong mình niềm đam mê mãnh liệt
                  với nghệ thuật trang trí không gian sống. Chúng tôi tin rằng,
                  những bức tường và trần nhà không chỉ là những cấu trúc đơn
                  thuần, mà còn là những bức tranh nghệ thuật tiềm năng, có thể
                  biến đổi hoàn toàn cảm nhận về không gian. Với sự sáng tạo
                  không ngừng và ứng dụng công nghệ 3D tiên tiến, chúng tôi mang
                  đến những giải pháp thiết kế tường và trần nhà 3D độc đáo, ấn
                  tượng, giúp bạn kiến tạo nên những không gian sống đẳng cấp và
                  đầy cá tính.
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
            {/* Second Card - Vertical Layout */}
            <Card className="mt-6 w-96 animate-fade-left animate-ease-in-out">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>

            {/* Additional Content Section */}
          </div>
          <div className="mt-[110px] mx-[99px]">
            <div className="flex-col justify-center items-center">
              <p className="text-3xl font-bold font-roboto uppercase  mb-[5px]">
                Cách chúng tôi hoạt động
              </p>
              <h1 className="text-start text-base font-roboto mb-[10px]">
                Chúng tôi cam kết mang đến cho bạn không gian sống hoàn hảo với
                quy trình làm việc chuyên nghiệp:
              </h1>
            </div>
            <div className="w-full mt-[30px] px-24 py-4 mb-20">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step onClick={() => setActiveStep(0)}>
                  <LightBulbIcon className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 0 ? "blue-gray" : "gray"}
                    >
                      Bước 1: Tư vấn và lên ý tưởng
                    </Typography>
                    <Typography
                      color={activeStep === 0 ? "blue-gray" : "gray"}
                      className="font-normal"
                    >
                      Hiểu rõ nhu cầu của bạn để đưa ra giải pháp tối ưu.
                    </Typography>
                  </div>
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                  <Square3Stack3DIcon className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 1 ? "blue-gray" : "gray"}
                    >
                      Bước 2: Thiết kế 3D
                    </Typography>
                    <Typography
                      color={activeStep === 1 ? "blue-gray" : "gray"}
                      className="font-normal"
                    >
                      Hình dung không gian sống tương lai một cách chân thực.
                    </Typography>
                  </div>
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                  <HomeModernIcon className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 2 ? "blue-gray" : "gray"}
                    >
                      Bước 3: Sản xuất và thi công
                    </Typography>
                    <Typography
                      color={activeStep === 2 ? "blue-gray" : "gray"}
                      className="font-normal"
                    >
                      Đảm bảo chất lượng và tiến độ thi công.
                    </Typography>
                  </div>
                </Step>
              </Stepper>
              <div className="mt-32 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                  Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                  Next
                </Button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};

export default AboutUs;
