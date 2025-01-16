import { useState, useEffect } from "react";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import {
  Input,
  Select,
  Option,
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import { Rating } from "@/components//rating";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { fetchAgencies, filterAgencies } from "@/apis/agenciesApi";
import supabase from "@/apis/supabaseClient";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { useToast } from "@/components/Toast";

const Agency = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [activeTab, setActiveTab] = useState("agents");
  const [registrationForm, setRegistrationForm] = useState({
    business_name: "",
    owner_name: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    business_type: "",
    business_license: "",
    experience: "",
    investment_capital: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({
    type: "success",
    message: "",
  });
  const [businessLicenseFile, setBusinessLicenseFile] = useState(null);
  const { Toast, toast } = useToast();

  const provinces = [
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Cần Thơ",
    "Bình Dương",
    "Đồng Nai",
  ];

  const areas = ["Miền Bắc", "Miền Trung", "Miền Nam"];

  const tabsData = [
    {
      label: "Danh sách đại lý",
      value: "agents",
    },
    {
      label: "Tin tức & Sự kiện",
      value: "news",
    },
    {
      label: "Hỗ trợ đại lý",
      value: "support",
    },
    {
      label: "Đăng ký làm đại lý",
      value: "register",
    },
  ];

  const businessTypes = [
    "Cửa hàng bán lẻ",
    "Showroom",
    "Đại lý phân phối",
    "Khác",
  ];

  useEffect(() => {
    const loadAgencies = async () => {
      const { data, error } = await fetchAgencies();
      if (!error && data) {
        setAgents(data);
        setFilteredAgents(data);
      }
    };

    loadAgencies();
  }, []);

  const handleSearch = async () => {
    // First, handle local search by name
    let filtered = agents;
    if (searchQuery) {
      filtered = agents.filter((agent) =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Then, if province or area is selected, use API filtering
    if (selectedProvince || selectedArea) {
      const { data, error } = await filterAgencies(
        selectedProvince,
        selectedArea
      );
      if (!error && data) {
        // Apply the name filter to the API results if there's a search query
        if (searchQuery) {
          filtered = data.filter((agent) =>
            agent.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else {
          filtered = data;
        }
      }
    }

    setFilteredAgents(filtered);
  };

  // Add useEffect to handle search query changes
  useEffect(() => {
    if (!searchQuery && !selectedProvince && !selectedArea) {
      setFilteredAgents(agents);
    } else {
      handleSearch();
    }
  }, [searchQuery]); // Only trigger on search query changes

  const validateRegistrationForm = () => {
    const errors = {};
    if (!registrationForm.business_name.trim())
      errors.business_name = "Vui lòng nhập tên doanh nghiệp";
    if (!registrationForm.owner_name.trim())
      errors.owner_name = "Vui lòng nhập tên chủ doanh nghiệp";
    if (!registrationForm.phone.trim())
      errors.phone = "Vui lòng nhập số điện thoại";
    if (!registrationForm.email.trim()) errors.email = "Vui lòng nhập email";
    if (!registrationForm.address.trim())
      errors.address = "Vui lòng nhập địa chỉ";
    if (!registrationForm.province)
      errors.province = "Vui lòng chọn tỉnh/thành";
    if (!registrationForm.business_type)
      errors.business_type = "Vui lòng chọn loại hình kinh doanh";

    setFormErrors(errors);

    // If there are errors, show error toast
    if (Object.keys(errors).length > 0) {
      setToastData({
        type: "error",
        message: "Vui lòng điền đầy đủ thông tin!",
      });
      setShowToast(true);

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return false;
    }

    return true;
  };

  const handleFileUpload = async (file) => {
    try {
      if (!file) return null;

      // Create unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}.${fileExt}`;
      const filePath = `business-licenses/${fileName}`;

      // Upload file to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from("agency-documents")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from("agency-documents")
        .getPublicUrl(filePath);

      return {
        url: data.publicUrl,
        filename: file.name,
        path: filePath,
      };
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    if (!validateRegistrationForm()) {
      toast({
        type: "error",
        message: "Vui lòng điền đầy đủ thông tin!",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Handle file upload first if there's a file
      let businessLicenseData = null;
      if (businessLicenseFile) {
        businessLicenseData = await handleFileUpload(businessLicenseFile);
        if (!businessLicenseData) {
          throw new Error("Failed to upload file");
        }
      }

      const { error } = await supabase.from("agency_applications").insert([
        {
          ...registrationForm,
          business_license: businessLicenseData,
        },
      ]);

      if (error) throw error;

      toast({
        type: "success",
        message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.",
      });

      // Reset form
      setRegistrationForm({
        business_name: "",
        owner_name: "",
        phone: "",
        email: "",
        address: "",
        province: "",
        business_type: "",
        business_license: "",
        experience: "",
        investment_capital: "",
      });
    } catch (error) {
      toast({
        type: "error",
        message: "Có lỗi xảy ra. Vui lòng thử lại sau.",
        action: {
          text: "Thử lại",
          onClick: () => handleRegistrationSubmit(e),
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <BreadcrumbsWithIcon />
      <div className="min-h-screen px-4 md:px-8 pb-24">
        <Typography
          variant="h1"
          className="text-4xl md:text-5xl font-bold text-center py-12 md:py-16"
        >
          Đại lý
        </Typography>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mb-12 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <Input
                label="Tìm kiếm đại lý"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=""
              />
            </div>
            <Select
              label="Chọn tỉnh/thành"
              value={selectedProvince}
              onChange={(value) => setSelectedProvince(value)}
            >
              {provinces.map((province) => (
                <Option key={province} value={province}>
                  {province}
                </Option>
              ))}
            </Select>
            <Select
              label="Chọn khu vực"
              value={selectedArea}
              onChange={(value) => setSelectedArea(value)}
            >
              {areas.map((area) => (
                <Option key={area} value={area}>
                  {area}
                </Option>
              ))}
            </Select>
          </div>
          <Button onClick={handleSearch} className="w-full md:w-auto">
            Tìm kiếm
          </Button>
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <TabsHeader>
              {tabsData.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <TabPanel value="agents" className="py-4 px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAgents.map((agent) => (
                    <Card key={agent.id} className="overflow-hidden">
                      <CardHeader floated={false} className="relative h-48">
                        <img
                          src={agent.images[0]}
                          alt={agent.name}
                          className="w-full h-full object-cover"
                        />
                      </CardHeader>
                      <CardBody className="p-4">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          {agent.name}
                        </Typography>
                        <div className="space-y-2">
                          <Typography className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {agent.address}
                          </Typography>
                          <Typography className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {agent.phone}
                          </Typography>
                          <Typography className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {agent.email}
                          </Typography>
                          <Typography className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {agent.workingHours}
                          </Typography>
                        </div>
                        <div className="mt-4">
                          <Rating value={agent.rating} readonly />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outlined"
                            size="sm"
                            className="flex items-center gap-2"
                          >
                            <Facebook className="h-4 w-4" />
                            Facebook
                          </Button>
                          <Button
                            variant="outlined"
                            size="sm"
                            className="flex items-center gap-2"
                          >
                            <InstagramLogoIcon className="h-4 w-4" />
                            Instagram
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="news">
                {/* Add News & Events content */}
              </TabPanel>
              <TabPanel value="support">
                {/* Add Support Center content */}
              </TabPanel>
              <TabPanel value="register" className="py-4 px-0">
                <Card className="w-full max-w-4xl mx-auto">
                  <CardBody className="p-8">
                    <Typography variant="h4" color="blue-gray" className="mb-8">
                      Đăng ký làm đại lý
                    </Typography>
                    <form
                      onSubmit={handleRegistrationSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Input
                            label="Tên doanh nghiệp"
                            value={registrationForm.business_name}
                            onChange={(e) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                business_name: e.target.value,
                              }))
                            }
                            error={formErrors.business_name}
                          />
                          {formErrors.business_name && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.business_name}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Input
                            label="Tên chủ doanh nghiệp"
                            value={registrationForm.owner_name}
                            onChange={(e) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                owner_name: e.target.value,
                              }))
                            }
                            error={formErrors.owner_name}
                          />
                          {formErrors.owner_name && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.owner_name}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Input
                            label="Số điện thoại"
                            value={registrationForm.phone}
                            onChange={(e) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            error={formErrors.phone}
                          />
                          {formErrors.phone && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.phone}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Input
                            label="Email"
                            type="email"
                            value={registrationForm.email}
                            onChange={(e) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            error={formErrors.email}
                          />
                          {formErrors.email && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.email}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Input
                            label="Địa chỉ"
                            value={registrationForm.address}
                            onChange={(e) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                address: e.target.value,
                              }))
                            }
                            error={formErrors.address}
                          />
                          {formErrors.address && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.address}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Select
                            label="Tỉnh/Thành phố"
                            value={registrationForm.province}
                            onChange={(value) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                province: value,
                              }))
                            }
                            error={formErrors.province}
                          >
                            {provinces.map((province) => (
                              <Option key={province} value={province}>
                                {province}
                              </Option>
                            ))}
                          </Select>
                          {formErrors.province && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.province}
                            </Typography>
                          )}
                        </div>

                        <div>
                          <Select
                            label="Loại hình kinh doanh"
                            value={registrationForm.business_type}
                            onChange={(value) =>
                              setRegistrationForm((prev) => ({
                                ...prev,
                                business_type: value,
                              }))
                            }
                            error={formErrors.business_type}
                          >
                            {businessTypes.map((type) => (
                              <Option key={type} value={type}>
                                {type}
                              </Option>
                            ))}
                          </Select>
                          {formErrors.business_type && (
                            <Typography color="red" className="text-sm mt-1">
                              {formErrors.business_type}
                            </Typography>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2"
                        >
                          Giấy phép kinh doanh
                        </Typography>
                        <div className="flex items-center gap-4">
                          <div className="relative flex-1">
                            <input
                              type="file"
                              id="business-license"
                              className="hidden"
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setBusinessLicenseFile(file);
                                  setRegistrationForm((prev) => ({
                                    ...prev,
                                    business_license: file.name,
                                  }));
                                }
                              }}
                            />
                            <Input
                              value={
                                businessLicenseFile
                                  ? businessLicenseFile.name
                                  : ""
                              }
                              onChange={() => {}}
                              className="cursor-not-allowed"
                              readOnly
                              label="Chọn file"
                            />
                            <label
                              htmlFor="business-license"
                              className="absolute right-0 top-0 bottom-0 px-4 flex items-center cursor-pointer bg-gray-50 rounded-r border border-gray-600"
                            >
                              <PaperClipIcon className="h-5 w-5 text-gray-600 " />
                            </label>
                          </div>
                          {businessLicenseFile && (
                            <Button
                              variant="outlined"
                              color="red"
                              className="p-3"
                              onClick={() => {
                                setBusinessLicenseFile(null);
                                setRegistrationForm((prev) => ({
                                  ...prev,
                                  business_license: "",
                                }));
                              }}
                            >
                              Xóa
                            </Button>
                          )}
                        </div>
                        <Typography className="text-sm text-gray-600">
                          Hỗ trợ: PDF, DOC, DOCX, JPG, JPEG, PNG (Max: 5MB)
                        </Typography>
                      </div>

                      <div>
                        <Textarea
                          label="Kinh nghiệm trong ngành"
                          value={registrationForm.experience}
                          onChange={(e) =>
                            setRegistrationForm((prev) => ({
                              ...prev,
                              experience: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div>
                        <Input
                          label="Vốn đầu tư dự kiến"
                          value={registrationForm.investment_capital}
                          onChange={(e) =>
                            setRegistrationForm((prev) => ({
                              ...prev,
                              investment_capital: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        className="mt-6"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        {isSubmitting ? "Đang xử lý..." : "Đăng ký làm đại lý"}
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <Footer />
      {Toast}
    </>
  );
};

export default Agency;
