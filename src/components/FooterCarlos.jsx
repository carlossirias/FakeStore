/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Footer({colorText, colorHover, isBlack = true})
{
    const themeClass = isBlack ? '950' : '200'
    console.log(themeClass)

    return(
        <footer className={`fixed z-10 pr-5 flex max-sm:self-center bg-gray-${themeClass}/50 bottom-2 md:left-2 p-3 rounded-full overflow-hidden  backdrop-blur-xl`}>
            <div className="flex gap-4">
                <img src="https://github.com/carlossirias.png" className="w-12 rounded-full " alt="" />
                <div>
                    <h1 className="font-semibold">Carlos Sirias</h1>
                    <a href={`https://github.com/carlossirias`} className={`text-[${colorText}] transition hover:text-[${colorHover}] font-medium`}>@carlossirias</a>
                </div>
                <div className="flex items-center gap-2">
                    <InstagramIcon className={`w-10 hover:text-[${colorHover}]`} color={colorText}/>
                    <DiscordLogo className={`w-10 hover:text-[${colorHover}]`}  color={colorText}/>
                    <XIcon className={`w-10 hover:text-[${colorHover}]`}  color={colorText}/>
                </div>
            </div>
        </footer>
    )
}

function InstagramIcon({color})
{
    return(
        <a href="https://www.instagram.com/carlosenmanuelsirias/">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
            </svg>
        </a>
    )
}

function DiscordLogo({color})
{
    return(
        <a href="https://discordapp.com/users/735263066911932516">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
            </svg>
        </a>
    )
}

function XIcon({color})
{
    return(
        <a href="https://twitter.com/sirias04">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"/>
            </svg>
        </a>
    )
}