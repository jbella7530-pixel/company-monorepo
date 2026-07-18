import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="font-medium">No activity yet</p>

          <p className="mt-2 text-sm text-muted-foreground">
            Create your first project to start tracking activity.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
