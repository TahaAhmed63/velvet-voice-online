
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah L.",
    role: "Event Organizer",
    quote: "Working with Artist Name was an absolute pleasure! Their performance was the highlight of our event. So professional and incredibly talented.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    initials: "SL",
  },
  {
    id: 2,
    name: "Michael B.",
    role: "Fan",
    quote: "I've been to many concerts, but Artist Name's voice is something else. Pure magic! Can't wait for the next show.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    initials: "MB",
  },
  {
    id: 3,
    name: "Emily K.",
    role: "Wedding Client",
    quote: "Artist Name made our wedding day so special. Their rendition of our favorite song brought tears to everyone's eyes. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    initials: "EK",
  },
  {
    id: 4,
    name: "David R.",
    role: "Music Critic",
    quote: "A voice that commands attention and soothes the soul. Artist Name is a rising star with a bright future in the music industry.",
    avatar: null, // Example of no avatar
    initials: "DR",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-dark-purple/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-gold mb-12">What Others Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card/80 border-brand-gold/30 shadow-lg h-full flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="h-12 w-12 border-2 border-brand-gold">
                        <AvatarImage src={testimonial.avatar || undefined} alt={testimonial.name} />
                        <AvatarFallback className="bg-brand-light-purple text-brand-dark-purple">{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-brand-gold">{testimonial.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 flex-grow">
                      <Quote className="text-brand-gold/50 h-8 w-8 mb-2" />
                      <p className="text-brand-light-purple/90 italic leading-relaxed">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-dark-purple" />
          <CarouselNext className="text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-dark-purple" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

