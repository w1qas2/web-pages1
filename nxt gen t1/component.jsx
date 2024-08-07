
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary py-4 px-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-primary-foreground font-bold text-xl" prefetch={false}>
            Job Board
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              Browse Jobs
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              Post a Job
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              Employers
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Sign In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">Find Your Dream Job</h1>
              <p className="text-primary-foreground/80 text-lg">
                Search through thousands of job postings and find the perfect fit for you.
              </p>
              <form className="flex items-center gap-2 md:gap-4">
                <Input
                  type="text"
                  placeholder="Job title, keywords or company"
                  className="flex-1 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md py-2 px-4"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Featured Jobs</h2>
                <p className="text-muted-foreground">Check out some of the top job postings.</p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">Acme Inc. - San Francisco, CA</p>
                    <p className="text-muted-foreground">
                      We are looking for an experienced software engineer to join our team and help build our
                      next-generation platform. You will be responsible for designing, developing, and maintaining
                      complex software systems.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex items-center justify-end">
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Marketing Manager</h3>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">Globex Corporation - New York, NY</p>
                    <p className="text-muted-foreground">
                      We are seeking a talented marketing manager to lead our digital marketing efforts. You will be
                      responsible for developing and executing marketing strategies to increase brand awareness and
                      drive customer acquisition.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex items-center justify-end">
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Product Designer</h3>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">Stark Industries - Los Angeles, CA</p>
                    <p className="text-muted-foreground">
                      We are looking for a talented product designer to join our team and help us create innovative and
                      user-friendly products. You will be responsible for designing the user interface, user experience,
                      and visual branding for our products.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex items-center justify-end">
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="bg-muted rounded-md p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Job Categories</h3>
                <nav className="grid gap-2">
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Software Engineering
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Marketing
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Design
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Sales
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Finance
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Human Resources
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Popular Locations</h3>
                <nav className="grid gap-2">
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    San Francisco
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    New York City
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Los Angeles
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Chicago
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Seattle
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                    Boston
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-muted-foreground text-sm">&copy; 2024 Job Board. All rights reserved.</p>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}