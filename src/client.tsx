/// <reference types="vinxi/types/client" />
import {hydrate, render} from 'solid-js/web'
import { StartClient } from '@tanstack/solid-start'
import { createRouter } from './router'

const router = createRouter()


/* TODO: change back to hydrate later */
hydrate(() => <StartClient router={router} />, document.body)
