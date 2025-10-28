import React from "react";

export default function MarinersMemberCard({
                                               member = {
                                                   fullName: "John Doe",
                                                   memberId: "MA1234",
                                                   mobile: "+91 9876543210",
                                                   email: "johndoe@email.com",
                                                   bloodGroup: "O+",
                                                   membershipType: "Annual",
                                                   joiningDate: "01-Jan-2023",
                                                   renewalDate: "01-Jan-2024",
                                               },
                                               imageSrc = "/mnt/data/155407f8-6c4a-489f-8024-5851aa756d1b.jpg",
                                           }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-900/90 to-emerald-950 flex items-start justify-center py-12 px-6">
            <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] shadow-emerald-950/70 border border-emerald-800">
                {/* Page header */}
                <header className="rounded-t-lg overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-red-800 to-emerald-900 px-8 py-6 text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
                            Mariners Arena Member Profile
                        </h1>
                    </div>
                </header>

                {/* Card container */}
                <div className="bg-zinc-900 rounded-b-lg shadow-2xl mt-6 p-6">
                    {/* Top profile block */}
                    <div className="bg-zinc-800 rounded-xl p-8 text-center shadow-inner shadow-zinc-700/50">
                        <div className="flex flex-col items-center">
                            {/* profile picture */}
                            <div className="relative -mt-8">
                                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-700 overflow-hidden ring-4 ring-red-800 ring-offset-4 ring-offset-zinc-800 shadow-xl shadow-red-900/40">
                                    <img
                                        src={imageSrc}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://via.placeholder.com/300x300.png?text=Profile";
                                        }}
                                    />
                                </div>
                            </div>

                            <h2 className="mt-6 text-3xl font-extrabold text-white drop-shadow-md">{member.fullName}</h2>
                            <div className="text-zinc-300 mt-2">ID: <span className="font-semibold text-white">{member.memberId}</span></div>

                            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                                <span className="px-5 py-2 bg-red-800 text-white rounded-full font-semibold shadow-md shadow-red-900/60">{member.membershipType}</span>
                                <span className="px-5 py-2 bg-red-800 text-white rounded-full font-semibold shadow-md shadow-red-900/60">Joined: {member.joiningDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Personal & Membership Info */}
                    <section className="mt-8 bg-zinc-900 rounded-lg p-6 shadow-lg shadow-zinc-800/80">
                        <h3 className="text-2xl font-extrabold text-amber-100 drop-shadow-sm">Personal & Membership Info</h3>
                        <div className="h-1 bg-red-800 mt-4 rounded shadow-md shadow-red-900/50"></div>

                        <div className="mt-6 bg-zinc-800 rounded-md divide-y divide-zinc-700 overflow-hidden shadow-inner shadow-zinc-900/60">
                            <Row label="Full Name" value={member.fullName} />
                            <Row label="Member ID" value={member.memberId} />
                            <Row label="Mobile" value={member.mobile} />
                            <Row label="Email" value={member.email} />
                            <Row label="Blood Group" value={member.bloodGroup} />
                            <Row label="Membership Type" value={member.membershipType} />
                            <Row label="Joining Date" value={member.joiningDate} />
                            <Row label="Renewal Date" value={member.renewalDate} />
                        </div>
                    </section>

                    {/* Renewal banner */}
                    <footer className="mt-8">
                        <div className="bg-emerald-900 text-emerald-50 py-4 px-6 rounded-md text-center font-semibold text-lg shadow-lg shadow-emerald-950/70">
                            Renewal Due: {member.renewalDate} — {member.membershipType}
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

function Row({ label, value }) {
    return (
        <div className="grid grid-cols-3 gap-4 px-6 py-4 items-center hover:bg-zinc-800/70 transition-shadow shadow-sm hover:shadow-md hover:shadow-red-900/20 rounded">
            <div className="col-span-2 text-zinc-300 font-semibold">{label}:</div>
            <div className="text-right text-white font-medium">{value}</div>
        </div>
    );
}