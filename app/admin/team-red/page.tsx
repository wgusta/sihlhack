import { db } from '@/lib/db'
import { teamRedApplications } from '@/lib/db/schema'
import { desc } from 'drizzle-orm'

export const metadata = {
  title: 'Team Red Applications | Admin',
  description: 'View and manage Team Red applications',
}

async function getApplications() {
  const applications = await db
    .select()
    .from(teamRedApplications)
    .orderBy(desc(teamRedApplications.createdAt))
  return applications
}

export default async function TeamRedAdminPage() {
  const applications = await getApplications()

  return (
    <div className="min-h-screen bg-brand-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-red-500">
            💀 Team Red Applications
          </h1>
          <p className="text-gray-400 font-mono mt-2">
            {applications.length} total applications
          </p>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 font-mono">No applications yet</p>
          </div>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white/5 border border-red-500/30 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {app.name}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">
                      {app.email}
                      {app.phone && ` • ${app.phone}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${
                        app.status === 'submitted'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : app.status === 'reviewed'
                          ? 'bg-blue-500/20 text-blue-400'
                          : app.status === 'accepted'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {app.status}
                    </span>
                    <p className="text-gray-500 font-mono text-xs mt-1">
                      {new Date(app.createdAt).toLocaleString('de-CH')}
                    </p>
                  </div>
                </div>

                {app.bio && (
                  <div className="mb-4">
                    <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                      Bio
                    </h4>
                    <p className="text-gray-300 font-mono text-sm">
                      {app.bio}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                    Security Experience
                  </h4>
                  <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                    {app.securityExperience}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                    Motivation
                  </h4>
                  <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                    {app.motivation}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {app.githubProfile && (
                    <div>
                      <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                        GitHub
                      </h4>
                      <a
                        href={app.githubProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono text-sm break-all"
                      >
                        {app.githubProfile}
                      </a>
                    </div>
                  )}
                  {app.ctfProfile && (
                    <div>
                      <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                        CTF Profile
                      </h4>
                      <a
                        href={app.ctfProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono text-sm break-all"
                      >
                        {app.ctfProfile}
                      </a>
                    </div>
                  )}
                  {app.portfolio && (
                    <div>
                      <h4 className="text-gray-400 font-mono text-xs uppercase mb-1">
                        Portfolio/CV
                      </h4>
                      <a
                        href={app.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono text-sm break-all"
                      >
                        {app.portfolio}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
