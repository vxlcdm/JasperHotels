  {item.subItems && item.subItems.length > 0 && (
            <Box ml={2}>
              {item.subItems.map((subItem, subIndex) => (
                <Typography
                  key={subIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(subItem.path);
                  }}
                  sx={{ cursor: "pointer", fontSize: "0.9rem" }}
                >
                  {subItem.label}
                </Typography>
              ))}
            </Box>
        )}






        </Box>
      ))}
    </Box>
  );
};