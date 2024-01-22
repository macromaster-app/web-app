import { Separator } from "@/components/ui/separator";
import { PasswordForm } from "@/components/Settings/ChangePassword/password-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Change Password</h3>
        <p className="text-sm text-muted-foreground">Write your new password</p>
      </div>
      <Separator />
      <PasswordForm />
    </div>
  );
}
