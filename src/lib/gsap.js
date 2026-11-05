import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

// One registration point for every GSAP plugin used on the site.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, CustomEase);

// The site's base curve (cubic-bezier .22, 1, .36, 1): weighted, decelerates into place.
CustomEase.create('base', '0.22, 1, 0.36, 1');

export { gsap, ScrollTrigger, SplitText, useGSAP };
