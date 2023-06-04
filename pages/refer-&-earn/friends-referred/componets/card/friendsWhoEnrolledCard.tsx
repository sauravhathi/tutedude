
export default function FriendsWhoEnrolledCard() {
    const data = [
        {
            id: 1,
            name: "Dhiraj Saxsenaa",
            date: "14 Sep, 2022",
            courseEnrolled: "6",
            category: [
                "UI/UX",
                "Photoshop",
                "Illustrator",
                "Python",
                "MERN",
                "Java",
            ],
            referralAmount: "185",
        },
        {
            id: 2,
            name: "Subhash Mishra",
            date: "15 Sep, 2022",
            courseEnrolled: "23",
            category: [
                "UI/UX",
                "Photoshop",
                "Illustrator",
                "Python",
                "MERN",
                "Java",
                "C++",
            ],
            referralAmount: "485",
        },
        {
            id: 3,
            name: "Prafull Kumar",
            date: "16 Sep, 2022",
            courseEnrolled: "23",
            category: [
                "UI/UX",
                "Photoshop",
                "Illustrator",
                "Python",
                "MERN",
                "Java",
                "C++",
            ],
            referralAmount: "485",
        },
        {
            id: 4,
            name: "Ram Kumar",
            date: "17 Sep, 2022",
            courseEnrolled: "23",
            category: [
                "UI/UX",
                "Photoshop",
                "Illustrator",
                "Python",
                "MERN",
                "Java",
                "C++",
            ],
            referralAmount: "485",
        },
        {
            id: 5,
            name: "Ramesh Kumar",
            date: "18 Sep, 2022",
            courseEnrolled: "23",
            category: [
                "UI/UX",
                "Photoshop",
                "Illustrator",
                "Python",
                "MERN",
                "Java",
                "C++",
            ],
            referralAmount: "485",
        },
    ]
    return (
        <div className="card">
            <h2 className="card__heading">
                Friends who enrolled
                <span className="card__size">{"(" + data.length + ")"}</span>
            </h2>
            <div className="card__details">
                {data &&
                    data.map((item, index) => (
                        <div key={index} className="card__item">
                            <div className="card__header">
                                <span className="card__name">{item.name}</span>
                                <span className="card__date">{item.date}</span>
                            </div>
                            <div className="card__body">
                                <span className="card__courseEnrolled">
                                    Courses Enrolled{"(" + item.courseEnrolled + ")"}
                                </span>
                                <div className="card__category">
                                    {item.category.map((category, index) => (
                                        <span key={index} className="card__category__item">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="card__footer">
                                <span className="card__referralAmount__heading">
                                    Referral Amount{" "}
                                </span>
                                <span className="card__referralAmount">{"₹" + item.referralAmount}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    )
}