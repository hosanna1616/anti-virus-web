import { Navigation } from "@/components/navigation";
import { EthiopianPattern } from "@/components/ethiopian-pattern";
import {
  EthiopianFlag,
  EthiopianBorder,
} from "@/components/ethiopian-cultural-elements";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  ShieldCheck,
  Activity,
  Download,
  Scan,
  Clock,
  Globe,
  Zap,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* <Navigation /> */}

      {/* Background Video Section */}
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/90 z-10" />
        <EthiopianPattern className="absolute inset-0 z-20 text-white/10" />

        {/* Video Background */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/security-dark.webm" type="video/webm" />
        </video> */}

        {/* Dashboard Header Content */}
        <div className="relative z-30 container px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white px-33">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif ">
                  Security Dashboard
                </h1>
                {/* <p className="text-white/90 text-sm sm:text-base lg:text-lg">Real-time protection status</p> */}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 xs:space-x-4 lg:space-x-6">
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-100 border-green-400 flex items-center space-x-2 text-xs sm:text-sm"
              >
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>System Protected</span>
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-blue-100 border-blue-400 flex items-center space-x-2 text-xs sm:text-sm"
              >
                <Activity className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Real-time Monitoring</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 -mt-12 sm:-mt-16 relative z-40">
        {/* Quick Stats
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-card/95 backdrop-blur border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Threats Blocked</CardTitle>
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">1,247</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur border-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium">System Health</CardTitle>
              <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">98.5%</div>
              <p className="text-xs text-muted-foreground">Optimal performance</p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Last Scan</CardTitle>
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-accent">2h ago</div>
              <p className="text-xs text-muted-foreground">Full system scan completed</p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Protected Devices</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">5</div>
              <p className="text-xs text-muted-foreground">All devices secure</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mt-33 bg-transparent">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* Real-time Protection Status */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span>Real-time Protection</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  Your system is actively protected against threats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Virus Protection</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 text-xs"
                  >
                    Active
                  </Badge>
                </div>
                <Progress value={100} className="h-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Firewall</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 text-xs"
                  >
                    Active
                  </Badge>
                </div>
                <Progress value={100} className="h-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Web Protection</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 text-xs"
                  >
                    Active
                  </Badge>
                </div>
                <Progress value={100} className="h-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email Protection</span>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 text-xs"
                  >
                    Updating
                  </Badge>
                </div>
                <Progress value={75} className="h-2" />
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-green-800">
                        Threat Blocked
                      </p>
                      <p className="text-xs text-green-600">
                        Malware detected and quarantined from download
                      </p>
                      <p className="text-xs text-green-500 mt-1">
                        2 minutes ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <Scan className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-blue-800">
                        System Scan Completed
                      </p>
                      <p className="text-xs text-blue-600">
                        Full system scan finished - No threats found
                      </p>
                      <p className="text-xs text-blue-500 mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <Download className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-yellow-800">
                        Definition Update
                      </p>
                      <p className="text-xs text-yellow-600">
                        Virus definitions updated successfully
                      </p>
                      <p className="text-xs text-yellow-500 mt-1">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">
                  Quick Actions
                </CardTitle>
                <CardDescription className="text-sm">
                  Manage your security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                <Button className="w-full justify-start bg-primary hover:bg-primary/90 text-sm h-10 sm:h-11">
                  <Scan className="h-4 w-4 mr-2" />
                  Run Full Scan
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent text-sm h-10 sm:h-11"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Update Definitions
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent text-sm h-10 sm:h-11"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Web Protection
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent text-sm h-10 sm:h-11"
                >
                  <Database className="h-4 w-4 mr-2" />
                  Quarantine Manager
                </Button>
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>System Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>CPU Usage</span>
                    <span>23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Memory Usage</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Disk Usage</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Ethiopian Cultural Element */}
            <EthiopianBorder>
              <Card className="border-0 bg-transparent">
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <EthiopianFlag className="h-5 w-6 sm:h-6 sm:w-8" />
                    <CardTitle className="text-primary text-base sm:text-lg">
                      EthioShield Heritage
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    Proudly protecting Ethiopian digital heritage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Local threat intelligence from Addis Ababa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>24/7 support in Amharic, Oromo, and English</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span>Built with Ethiopian values and excellence</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-center text-muted-foreground">
                      ኢትዮጵያን ዲጂታል ወደፊት ማስጠበቅ
                    </p>
                    <p className="text-xs text-center text-muted-foreground mt-1">
                      Securing Ethiopia's Digital Future
                    </p>
                  </div>
                </CardContent>
              </Card>
            </EthiopianBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
