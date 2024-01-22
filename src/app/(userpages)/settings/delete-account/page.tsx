"use client";
import { Separator } from "@/components/ui/separator";
import DialogButton from "@/components/Settings/DeleteAccount/dialog";
export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Delete Account</h3>
        <p className="text-sm text-muted-foreground">
          Click button to delete account
        </p>
      </div>
      <Separator />
      <DialogButton />
    </div>
  );
}
