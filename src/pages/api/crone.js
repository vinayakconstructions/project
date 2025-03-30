export default function handler(req, res) {
    // Your scheduled task logic here
    console.log("Cron job executed - Running daily task...");
    res.status(200).json({ message: "Cron job executed successfully" });
  }