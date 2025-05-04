import Dialog from '@corvu/dialog'
import type {Component, VoidComponent } from 'solid-js'

const BaseDialog: Component<{}> = props => {

    return (
        <Dialog initialOpen={true}>

            <Dialog.Portal>
                <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50 data-open:animate-in data-open:fade-in-0% data-closed:animate-out data-closed:fade-out-0%" />
                <Dialog.Content class="fixed left-1/2 top-1/2 z-50 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 data-open:animate-in data-open:fade-in-0% data-open:zoom-in-95% data-open:slide-in-from-top-10% data-closed:animate-out data-closed:fade-out-0% data-closed:zoom-out-95% data-closed:slide-out-to-top-10%">
                    <Dialog.Label class="text-md">
                        Sign Up for 20% Off your first order!
                    </Dialog.Label>
                    <Dialog.Description class="mt-2">
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <div class="space-y-6" >
                                <div>
                                    <label for="email" class="block text-sm/6 font-medium text-gray-900"></label>
                                    <div class="mt-2">
                                        <input placeholder="Email" type="email" name="email" id="email" autocomplete="email" required
                                               class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Description>
                    <div class="mt-3 flex justify-between">
                            <Dialog.Close type="button"
                                    class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                               Sign Up
                            </Dialog.Close>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}

export default BaseDialog
