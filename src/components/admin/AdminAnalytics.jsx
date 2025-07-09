import { Card, Typography } from "@material-tailwind/react";

export default function AdminAnalytics({ totalProducts, outOfStock, totalRevenue, activeCampaigns }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8">
      <Card className="p-4 flex flex-col items-start bg-white dark:bg-gray-800 shadow">
        <Typography variant="small" className="text-gray-500 dark:text-gray-400">Total Products</Typography>
        <Typography variant="h4" className="font-bold">{totalProducts}</Typography>
      </Card>
      <Card className="p-4 flex flex-col items-start bg-white dark:bg-gray-800 shadow">
        <Typography variant="small" className="text-gray-500 dark:text-gray-400">Out of Stock</Typography>
        <Typography variant="h4" className="font-bold">{outOfStock}</Typography>
      </Card>
      <Card className="p-4 flex flex-col items-start bg-white dark:bg-gray-800 shadow">
        <Typography variant="small" className="text-gray-500 dark:text-gray-400">Total Revenue</Typography>
        <Typography variant="h4" className="font-bold">${totalRevenue.toLocaleString()}</Typography>
      </Card>
      <Card className="p-4 flex flex-col items-start bg-white dark:bg-gray-800 shadow">
        <Typography variant="small" className="text-gray-500 dark:text-gray-400">Active Campaigns</Typography>
        <Typography variant="h4" className="font-bold">{activeCampaigns}</Typography>
      </Card>
    </section>
  );
}