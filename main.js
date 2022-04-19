const LinksSocialMedia = {
  github: 'leandresant',
  youtube: 'Aq3p23dRxNO1TMU0TtgPA',
  faceboock: 'leandresant',
  instagram: 'leandresant',
  twitter: 'leandresant'
}

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
  const social = li.getAttribute('class')

    li.childre[0].ref = `https://${social}.com/${LinksSocialMedia{social}}`
  }
}

ChangeLinksSocialMedia()

function getGitHubProfileInfos () {
   const url = `https://api.github.com/users/${LinksSocialMedia.github}`

   fetch(url)
   .then(Response =>  Response.json())
   .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userLink.href = data.html_url
     UserImage.src = data.avatar_url
     userLogin.textContent = data.login
   })

   }
