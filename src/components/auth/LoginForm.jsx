import { useState } from "react";
import {
  Input,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import supabase from "@/apis/supabaseClient";
import { useToast } from "@/components/Toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast, Toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      setTimeout(() => {
        toast({
          type: "success",
          message: "Đăng nhập thành công!",
        });
        navigate("/admin");
      });
    } catch (error) {
      console.log("Login error:", error);
      toast({
        type: "error",
        message: "Email hoặc mật khẩu không chính xác.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-4 text-center"
          >
            Đăng nhập
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Input
              type="password"
              label="Mật khẩu"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng nhập"}
            </Button>
          </form>
        </CardBody>
      </Card>
      {Toast}
    </div>
  );
};

export default LoginForm;
