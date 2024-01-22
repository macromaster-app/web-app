import { Separator } from "@/components/ui/separator";
import { EmailForm } from "@/components/Settings/ChangeEmail/email-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Change Email</h3>
        <p className="text-sm text-muted-foreground">
          Write new email that will replace the old one
        </p>
      </div>
      <Separator />
      <EmailForm />
    </div>
  );
}
