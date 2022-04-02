const organiseVideoByRating = (list) => {
    return list.sort((a, b) => {
        return a.likes - b.likes;
    }).reverse();
}

export default organiseVideoByRating;
