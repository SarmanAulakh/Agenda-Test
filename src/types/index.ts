export interface Image {
  src: string,
  alt: string,
}

export interface User {
  name: string,
  type: "presenter" | "viewer"
}

export interface Topic {
  id: number,
  title: string,
  timeEstimate: number, // minutes
  startTime?: Date,
  description: string,
  image?: Image,
}

export interface Meeting {
  id: number,
  name: string,
  topics: Topic[],
  presenter: string,
  delay: Date,
}

export interface Agenda {
  user: User,
  meetings: Meeting[]
}