import React from "react";

export default function EventSchedule() {
  const schedule = [
    {
      day: "Day 1",
      date: "March 06, 2026",
      events: [
        { time: "9:00 AM – 10:00 AM", event: "Registration" },
        { time: "10:30 AM – 1:30 PM", event: "Parallel Workshops" },
        { time: "1:30 PM – 2:45 PM", event: "Lunch" },
        { time: "3:00 PM – 4:30 PM", event: "Inauguration Ceremony" },
        { time: "4:30 PM – 5:00 PM", event: "Tea Time" },
        { time: "5:10 PM – 6:10 PM", event: "Keynote Address" },
        { time: "6:15 PM – 7:15 PM", event: "Talk Session 1" },
        { time: "7:15 PM – 8:30 PM", event: "Cultural Night" },
        { time: "8:30 PM – 9:00 PM", event: "Dinner" },
      ],
    },
    {
      day: "Day 2",
      date: "March 07, 2026",
      events: [
        { time: "8:00 AM – 9:00 AM", event: "Breakfast" },
        { time: "9:00 AM – 2:00 PM", event: "Industrial Visit 1 & Lunch" },
        { time: "9:00 AM – 2:00 PM", event: "Industrial Visit 2 & Lunch" },
        { time: "2:00 PM – 3:30 PM", event: "Industrial Innovation Challenge" },
        { time: "3:30 PM – 4:15 PM", event: "Talk Session 2" },
        { time: "4:30 PM – 5:45 PM", event: "IAS WIE Mentoring Sessions" },
        { time: "5:45 PM – 7:00 PM", event: "Industry and Entrepreneurship Session" },
        { time: "7:15 PM – 8:30 PM", event: "Dinner with Live Music" },
      ],
    },
    {
      day: "Day 3",
      date: "March 8, 2026",
      events: [
        { time: "8:30 AM – 9:30 AM", event: "Breakfast" },
        { time: "9:45 AM – 11:45 AM", event: "Talk Session 3" },
        { time: "12:00 PM – 1:00 PM", event: "Chairs Meet" },
        { time: "12:00 PM – 1:15 PM", event: "Industrial Innovation Challenge Finals" },
        { time: "12:15 PM – 1:45 PM", event: "Closing Ceremony" },
        { time: "1:45 PM – 3:00 PM", event: "Lunch" },
      ],
    },
  ];

  return (
    <section id="schedule" className="min-h-screen px-6 py-24 text-[#e0e0e0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" style={{ color: "#d4af37" }}>
          Event Schedule
        </h2>

        <div className="space-y-16">
          {schedule.map((dayItem, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#d4af37] tracking-wide mb-2">{dayItem.day}</h3>
                <p className="text-xl text-gray-300 font-medium uppercase tracking-wider">{dayItem.date}</p>
              </div>

              <div className="bg-[#0a1628]/80 backdrop-blur-sm rounded-xl border border-[#d4af37]/30 overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#d4af37]/10 border-b border-[#d4af37]/30">
                      <th className="py-5 px-6 font-bold text-[#f4e5a0] w-1/2 uppercase tracking-wider text-sm text-center border-r border-[#d4af37]/20">Time</th>
                      <th className="py-5 px-6 font-bold text-[#f4e5a0] w-1/2 uppercase tracking-wider text-sm text-left pl-10">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayItem.events.map((event, eventIndex) => (
                      <tr
                        key={eventIndex}
                        className="group border-b border-[#d4af37]/10 hover:bg-[#d4af37]/5 transition-colors duration-300 last:border-0"
                      >
                        <td className="py-4 px-6 align-middle text-gray-300 font-medium group-hover:text-[#d4af37] transition-colors text-center whitespace-nowrap border-r border-[#d4af37]/20">
                          {event.time}
                        </td>
                        <td className="py-4 px-6 align-middle text-gray-100 font-medium text-lg text-left pl-10">
                          {event.event}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
