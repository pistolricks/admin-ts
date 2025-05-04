import { Avatar as ArkAvatar } from '@ark-ui/solid/avatar'
import { Show, splitProps } from 'solid-js'
import {IconProfile} from "~/components/svg";

export interface AvatarProps extends ArkAvatar.RootProps {
    name?: string
    src?: string
}

export const Avatar = (props: AvatarProps) => {
    const [localProps, rootProps] = splitProps(props, ['name', 'src'])

    return (
        <ArkAvatar.Root {...rootProps}>
            <ArkAvatar.Fallback>
                <Show when={localProps.name} fallback={<IconProfile class={'size-6 stroke-1 stroke-accent/50'} />}>
                    {getInitials(localProps.name)}
                </Show>
            </ArkAvatar.Fallback>
            <ArkAvatar.Image src={localProps.src} alt={localProps.name} />
        </ArkAvatar.Root>
    )
}

const getInitials = (name = '') =>
    name
        .split(' ')
        .map((part) => part[0])
        .splice(0, 2)
        .join('')
        .toUpperCase()
