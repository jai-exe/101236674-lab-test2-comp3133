export interface Mission {
    flight_number: number,
    mission_name: string,
    launch_year: number,
    details: string,
    rocket:{
        [key: string]: Rocket
    },
    launch_site:{
        [key: string]: Launch
    },
    links: {
        [key: string]: Link
    }

}

export interface Rocket {
    rocket_name: string,
    rocket_type: string
}

export interface Launch {
    site_name_long: string
}

export interface Link {
    mission_patch: string,
    mission_patch_small: string,
    article_link: string,
    wikipedia: string,
    video_link: string
}