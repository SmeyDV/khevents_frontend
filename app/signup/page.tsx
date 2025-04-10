"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Facebook, Mail, User, Building2, ArrowRight, Check } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const [step, setStep] = useState<"account-type" | "details" | "verification">("account-type")
  const [accountType, setAccountType] = useState<"user" | "organizer">("user")

  const handleContinue = () => {
    if (step === "account-type") {
      setStep("details")
    } else if (step === "details") {
      setStep("verification")
    }
  }

  const handleBack = () => {
    if (step === "details") {
      setStep("account-type")
    } else if (step === "verification") {
      setStep("details")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold">KhmerEvents</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold">Create Your Account</h1>
            <p className="text-muted-foreground mt-2">Join KhmerEvents to discover and share amazing events</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === "account-type" || step === "details" || step === "verification"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                1
              </div>
              <div className={`w-12 h-1 ${step !== "account-type" ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === "details" || step === "verification"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                2
              </div>
              <div className={`w-12 h-1 ${step === "verification" ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === "verification" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {step === "account-type" && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-semibold text-center">Choose Account Type</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    accountType === "user" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setAccountType("user")}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    {accountType === "user" && <Check className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-serif font-medium mb-2">Regular User</h3>
                  <p className="text-muted-foreground text-sm">
                    Discover and attend events, save favorites, and connect with the community.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Browse and book event tickets</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Save favorite events</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Receive personalized recommendations</span>
                    </li>
                  </ul>
                </div>

                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    accountType === "organizer"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setAccountType("organizer")}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    {accountType === "organizer" && <Check className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-serif font-medium mb-2">Event Organizer</h3>
                  <p className="text-muted-foreground text-sm">
                    Create and manage events, sell tickets, and grow your audience.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Create and publish events</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Manage ticket sales and attendees</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Access analytics and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="w-full mt-6" onClick={handleContinue}>
                Continue <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-semibold text-center">
                {accountType === "user" ? "Create Your Account" : "Create Organizer Account"}
              </h2>

              <div className="space-y-4">
                {accountType === "user" ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a strong password" />
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters with a number and a special character.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" placeholder="+855 12 345 678" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" placeholder="Your organization name" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Person</Label>
                        <Input id="contact-name" placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" placeholder="e.g. Event Manager" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-email">Email</Label>
                      <Input id="org-email" type="email" placeholder="organization@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-password">Password</Label>
                      <Input id="org-password" type="password" placeholder="Create a strong password" />
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters with a number and a special character.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-phone">Phone Number</Label>
                      <Input id="org-phone" placeholder="+855 12 345 678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-type">Organization Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="non-profit">Non-profit</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="educational">Educational</SelectItem>
                          <SelectItem value="community">Community Group</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-description">Organization Description</Label>
                      <Textarea
                        id="org-description"
                        placeholder="Tell us about your organization and the types of events you organize"
                        rows={3}
                      />
                    </div>
                  </>
                )}

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={handleBack}>
                  Back
                </Button>
                <Button className="flex-1" onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === "verification" && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-serif font-semibold">Verify Your Email</h2>
                <p className="text-muted-foreground mt-2">
                  We've sent a verification code to your email address. Please enter the code below.
                </p>
              </div>

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Input
                    key={i}
                    className="w-12 h-12 text-center text-lg"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                ))}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Didn't receive a code? <button className="text-primary hover:underline">Resend code</button>
                </p>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={handleBack}>
                  Back
                </Button>
                <Button className="flex-1">Complete Registration</Button>
              </div>
            </div>
          )}

          {step === "account-type" && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </>
          )}

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-serif font-bold">KhmerEvents</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KhmerEvents. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
