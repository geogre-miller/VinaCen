import { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

export default function ProductModal({
  open,
  onClose,
  onSave,
  categories,
  initialData,
  loading,
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    status: "active",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.short_desc || "",
        price: initialData.price || "",
        category:
          typeof initialData.categories === "object"
            ? initialData.categories.category_name
            : initialData.categories || "",
        stock: initialData.stock || "",
        image: initialData.product_image || "",
        status: initialData.status || "active",
      });
    } else {
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        status: "active",
      });
    }
    setErrors({});
  }, [initialData, open]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Required";
    if (!form.price || isNaN(form.price)) errs.price = "Valid price required";
    if (!form.category) errs.category = "Required";
    if (!form.status) errs.status = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(form);
  };

  return (
    <Dialog open={open} handler={onClose} size="lg">
      <DialogHeader>{initialData ? "Edit Product" : "Add New Product"}</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Product Name</label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              required
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <Input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              error={!!errors.price}
              required
            />
            {errors.price && <span className="text-xs text-red-500">{errors.price}</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <Select
              name="category"
              value={form.category}
              onChange={(val) => setForm((f) => ({ ...f, category: val }))}
              error={!!errors.category}
              required
            >
              {categories.map((cat) => (
                <Option key={cat} value={cat}>
                  {cat}
                </Option>
              ))}
            </Select>
            {errors.category && <span className="text-xs text-red-500">{errors.category}</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Stock</label>
            <Input
              name="stock"
              type="number"
              value={form.stock}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <Textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Image</label>
            <Input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            {form.image && typeof form.image === "string" && (
              <img
                src={form.image}
                alt="Preview"
                className="w-16 h-16 mt-2 object-cover rounded"
              />
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Status</label>
            <Select
              name="status"
              value={form.status}
              onChange={(val) => setForm((f) => ({ ...f, status: val }))}
              required
            >
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button color="indigo" type="submit" className="ml-2" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}