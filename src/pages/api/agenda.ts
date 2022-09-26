// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const mockData = {
    user: {
      name: "Sarman",
      type: "presenter",
    },
    meetings: [
      {
        id: 1,
        name: "Morning Standup",
        topics: [
          {
            id: 3,
            title: "New Hire Introductions",
            timeEstimate: 5,
            startTime: "December 25, 1995 23:15:00",
            description:
              "First day for new coops! Lets give them a warm welcome and introduce the team.",
            image: {
              src: "https://www.jazzhr.com/wp-content/uploads/2020/04/welcoming-new-hires.jpg",
              alt: "Welcome new hires on blackboard",
            },
          },
          {
            id: 4,
            title: "Security Issue",
            timeEstimate: 65,
            startTime: "December 25, 1995 23:15:00",
            description: "Urgent secuirty feature we need to fix!",
            image: {
              src: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg",
              alt: "Security Lock",
            },
          },
        ],
        presenter: "Sarman",
        delay: 0,
      },
      {
        id: 2,
        name: "Meeting 2",
        topics: [
          {
            id: 5,
            title: "Meeting 2 Topic 1",
            timeEstimate: 5,
            startTime: "December 25, 1995 23:15:00",
            description: "Meeting 2 description 1",
            image: {
              src: "https://www.jazzhr.com/wp-content/uploads/2020/04/welcoming-new-hires.jpg",
              alt: "Welcome new hires on blackboard",
            },
          },
          {
            id: 6,
            title: "Another Topic",
            timeEstimate: 65,
            startTime: "December 25, 1995 23:15:00",
            description: "Meeting 2 description 2",
            image: {
              src: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg",
              alt: "Security Lock",
            },
          },
        ],
        presenter: "Diane",
        delay: 0,
      },
    ],
  };
  res.status(200).json(mockData);
}
