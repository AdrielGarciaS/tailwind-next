import { Input } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>

            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
          action=""
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-small font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" />
              </Input.Root>

              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-small font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-700" />
              </Input.Prefix>

              <Input.Control id="email" type="email" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-small font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>

              <label
                htmlFor="photo"
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:text-violet-500"
              >
                <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>

              <input id="photo" className="sr-only" type="file" />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-small font-medium text-zinc-700"
            >
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-small font-medium text-zinc-700"
            >
              Country
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-small font-medium text-zinc-700"
            >
              Timezone
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-small font-medium text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-small font-medium text-zinc-700"
            >
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>

            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
