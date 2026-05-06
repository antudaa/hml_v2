import type { LatestNewsItem } from "./types";

export const latestNewsItems = [
  {
    id: "kdbc-cess",
    title: "KOBC Award",
    subtitle:
      "Hi-Megaline Achieves Excellent Shipping Company and Shipper (CESS) Certification",
    image: "/news/kobc/1.jpg",
    images: ["/news/kobc/1.jpg", "/news/kobc/2.jpg", "/news/kobc/3.jpg"],
    date: { month: "APR", day: "10" },
    body: "Hi-Megaline is proud to announce that it has officially earned the Certified Excellent Shipping Company and Shipper (CESS) designation from the Korea Ocean Business Corporation (KOBC). This certification recognizes companies that demonstrate operational excellence and commitment to fair, transparent, and collaborative shipping practices. Hi-Megaline was highly commended for its contribution to the maritime industry and its reliable logistics network.\n\nThis achievement reflects our dedication to operational integrity and the trust of our clients, said Hi-Megaline. We are grateful to KOBC and our hardworking team for making this possible. We will continue to drive competitiveness and sustainable growth in the global maritime sector.\n\nHi-Megaline remains committed to delivering advanced logistics solutions as a trusted global partner.",
  },
  {
    id: "cydf-chartering",
    title: "CYDF Chartering",
    subtitle:
      "Hi-Megaline Introduces New Long-Term Vessel, Chang Yang Dong Fang",
    images: ["/news/cydf/1.jpeg"],
    date: { month: "APR", day: "04" },
    body: 'Hi-Megaline has officially added the Chang Yang Dong Fang to its fleet as a new long-term charter vessel.\n\nChang Yang Dong Fang is specifically designed to support reliable and efficient maritime operations. With a strong emphasis on safety, performance, and operational excellence, the vessel is well equipped to meet complex transportation requirements across global routes.\n\n"The introduction of this new vessel will allow us to provide even more precise and stable logistics services on a global scale," Hi-Megaline stated. The company also reaffirmed its commitment to maintaining the highest standards of transportation quality moving forward.',
  },
  {
    id: "hug-megaline",
    title: "Contract Signing of the New Building: The Launch of HUG Megaline",
    subtitle: "Hi-Megaline Expands Global Maritime Competitiveness",
    images: ["/news/nb/NB.png"],
    date: { month: "MAR", day: "15" },
    body: 'Hi-Megaline is proud to announce the establishment of its fourth subsidiary, HUG Megaline, and the upcoming contract signing for a new building vessel to further strengthen our global maritime competitiveness. Representing our core values, the name HUG stands for "Happy through Unique Grit," embodying our commitment to achieving collective happiness through the distinctive perseverance that defines Hi-Megaline.\n\nCurrently in the final stages of incorporation, HUG-Megaline will serve as a strategic cornerstone for our fleet expansion, ensuring that we continue to deliver excellence and navigate the future of heavy-lift shipping with unmatched grit and innovation.',
  },
  {
    id: "17th-anniversary",
    title: "17th Anniversary of Hi-Megaline",
    subtitle: "Hi-Megaline Celebrates 17th Anniversary",
    images: ["/news/17th_ani/1.jpeg"],
    date: { month: "MAR", day: "01" },
    body: "Hi-Megaline marked its 17th anniversary on the 10th with a special company-wide teatime and dinner. This event was a meaningful opportunity for all the members to step back from their schedules to pause, reflect, and celebrate our collective achievements. Following a relaxed teatime, the evening dinner served as a platform to strengthen our bonds and honor the dedication that has driven our growth over the past 17 years.\n\nBuilding on the incredible energy of the first half of the year, we are ready to take on the rest of 2026. As we look ahead, we move forward with gratitude, ambition, and confidence. Congratulations to everyone on 17 successful years. Let's keep the momentum going through the second half of the year!",
  },
] satisfies readonly LatestNewsItem[];
