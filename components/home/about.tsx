export function AboutMe() {
  return (
    <div id="aboutme" className="py-10">
      <h2 className="text-base font-medium text-primary/90">about me.</h2>
      <p className="mt-4 flex flex-col gap-2 text-base font-normal text-muted-foreground">
        <span>
          Hi! As a passionate software developer, I am dedicated to reshaping the digital
          landscape by crafting scalable web applications that harmoniously blend aesthetics
          with functionality. My focus lies in integrating innovative features that not only 
          simplify user interactions but also elevate their overall experience. 
          {" "}
          <span className="hidden sm:inline">
            
          </span>
        </span>
        <span>
        Beyond coding, I thrive in social settings, find joy in the thrill of sports, and my love for
        collecting and reading books fills my life with fresh perspectives.
        </span>
      </p>
    </div>
  )
}
