"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/theme-provider";
import { Settings, Shield, Bell, Globe, Palette, Save } from "lucide-react";
import { EthiopianFlag } from "@/components/ethiopian-cultural-elements";
import BackgroundVideo from "@/components/VideoBackground";

interface SettingsState {
  realTimeProtection: boolean;
  firewallProtection: boolean;
  scanSensitivity: number[];
  threatAlerts: boolean;
  scanComplete: boolean;
  updateNotifications: boolean;
  language: string;
  theme: string;
}

export default function SettingsPage() {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const [settings, setSettings] = useState<SettingsState>({
    realTimeProtection: true,
    firewallProtection: true,
    scanSensitivity: [75],
    threatAlerts: true,
    scanComplete: true,
    updateNotifications: false,
    language: "en",
    theme: "system",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem("ethio-shield-settings");
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
    }
  }, []);

  const handleSaveSettings = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save to localStorage
      localStorage.setItem("ethio-shield-settings", JSON.stringify(settings));

      // Apply theme change
      if (settings.theme !== theme) {
        setTheme(settings.theme as "light" | "dark" | "system");
      }

      toast({
        title: "Settings Saved",
        description: "Your preferences have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateSetting = (key: keyof SettingsState, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* <BackgroundVideo /> */}

      <div className="relative z-10">
        <div className="container px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-center space-x-2">
                <Settings className="h-8 w-8 text-primary animate-float" />
                <EthiopianFlag className="h-4 w-6" />
              </div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">
                Customize your EthioShield experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {/* Security Settings */}
              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Security Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Configure your protection preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="real-time">Real-time Protection</Label>
                    <Switch
                      id="real-time"
                      checked={settings.realTimeProtection}
                      onCheckedChange={(checked) =>
                        updateSetting("realTimeProtection", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="firewall">Firewall Protection</Label>
                    <Switch
                      id="firewall"
                      checked={settings.firewallProtection}
                      onCheckedChange={(checked) =>
                        updateSetting("firewallProtection", checked)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Scan Sensitivity: {settings.scanSensitivity[0]}%
                    </Label>
                    <Slider
                      value={settings.scanSensitivity}
                      onValueChange={(value) =>
                        updateSetting("scanSensitivity", value)
                      }
                      max={100}
                      step={1}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your alert preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="threat-alerts">Threat Alerts</Label>
                    <Switch
                      id="threat-alerts"
                      checked={settings.threatAlerts}
                      onCheckedChange={(checked) =>
                        updateSetting("threatAlerts", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="scan-complete">Scan Complete</Label>
                    <Switch
                      id="scan-complete"
                      checked={settings.scanComplete}
                      onCheckedChange={(checked) =>
                        updateSetting("scanComplete", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="updates">Update Notifications</Label>
                    <Switch
                      id="updates"
                      checked={settings.updateNotifications}
                      onCheckedChange={(checked) =>
                        updateSetting("updateNotifications", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Language Settings */}
              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Language & Region</span>
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred language
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Interface Language</Label>
                    <Select
                      value={settings.language}
                      onValueChange={(value) =>
                        updateSetting("language", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="am">አማርኛ (Amharic)</SelectItem>
                        <SelectItem value="or">Oromiffa</SelectItem>
                        <SelectItem value="ti">ትግርኛ (Tigrinya)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Appearance Settings */}
              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5" />
                    <span>Appearance</span>
                  </CardTitle>
                  <CardDescription>Customize the look and feel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <Select
                      value={settings.theme}
                      onValueChange={(value) => updateSetting("theme", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center animate-fade-in-up animation-delay-500">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover-glow px-8"
                onClick={handleSaveSettings}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
