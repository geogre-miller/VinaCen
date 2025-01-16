import { useAuth } from "@/components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";
import { useToast } from "@/components/Toast";

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        type: "success",
        message: "Đăng xuất thành công!",
      });
      navigate("/login");
    } catch (error) {
      toast({
        type: "error",
        message: "Có lỗi xảy ra khi đăng xuất",
      });
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout}>Đăng xuất</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your admin dashboard components here */}
      </div>
    </div>
  );
};

export default Admin;
